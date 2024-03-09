const { User } = require("../models");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });

    res.status(201).json({
      status: true,
      message: "User created successfully",
      data: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser };
