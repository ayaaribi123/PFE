const router = require("express").Router();
const User = require("../mongolog/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER

router.get("/register", (req, res) => {
	res.render("register");
});
router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString(),
	});

	try {
		const savedUser = await newUser.save();
		res.status(201).redirect("/auth/login");
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN
router.get("/login", (req, res) => {
	res.render("login");
});

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(401).json("Wrong User Name !");

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);
		const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

		OriginalPassword !== req.body.password &&
			res.status(401).json("Wrong password !");

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: "3d" }
		);

		/*
		// To not show the password when user informations show up*/
		const { password, ...others } = user._doc;
		res.status(200).json({ ...others, accessToken });

		if (user.isAdmin == true) {
			res.redirect("/admin");
		} else {
			res.redirect("/products");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
