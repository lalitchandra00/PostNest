import { Router } from 'express'
import { User } from '../models/Users.models.js'
import { upload } from '../middleware/multer.middleware.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'

const router = Router()

router.post('/signup', upload.single('profilepic'), async (req, res) => {
  try {
    const { email, username } = req.body
    const existedUser = await User.findOne({ $or: [{ username }, { email }] })
    if (existedUser) {
      return res.json({ success: false, message: "Username or Email already exists" })
    }

    let profilepicUrl = ''
    if (req.file) {
      const cloudinaryResponse = await uploadOnCloudinary(req.file.path)
      if (cloudinaryResponse) {
        profilepicUrl = cloudinaryResponse.url
      }
    }

    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profilepic: profilepicUrl,
    })

    const userWithoutPassword = await User.findById(newUser._id).select('-password')
    res.json({ success: true, data: userWithoutPassword })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
})

export default router