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

router.post('/login', async (req, res) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      return res.json({ success: false, message: 'Email and password are required' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.json({ success: false, message: 'Invalid email or password' })
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)
    if (!isPasswordCorrect) {
      return res.json({ success: false, message: 'Invalid email or password' })
    }

    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    })

    const loggedInUser = await User.findById(user._id).select('-password')

    res.json({ success: true, data: { user: loggedInUser, accessToken } })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
})

export default router