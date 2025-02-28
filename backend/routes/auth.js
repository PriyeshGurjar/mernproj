const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const { protect } = require('../middlewares/authmiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);


router.get('/me', protect, (req, res) => {
  res.status(200).json(req.user);
});
// Protected routes
router.post('/logout', protect, logoutUser);

module.exports = router;
