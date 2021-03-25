const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.DaftarUser = async (req, res) => {
    const { username, password, email, nama } = req.body

    const hashpass = await bcrypt.hash(password, 10)

    const user = new User({
        username: username,
        password: hashpass,
        email: email,
        nama: nama,
    });

    user.save()

    return res.status(201).json({
        message: 'Berhasil Mendaftar'
    })
}

exports.LoginUser = async (req, res) => {
    const { username, password } = req.body

    const datalogin = await User.findOne({ username: username });
    if (datalogin) {
        const passwordcompare = bcrypt.compare(password, datalogin.password)

        if (passwordcompare) {
            const data = {
                id: datalogin._id
            }
            const token = jwt.sign(data, process.env.JWT)
            return res.status(200).json({
                message: 'Berhasil Login',
                username: username,
                token: token
            })
        } else {
            return res.status(404).json({
                message: 'Login Gagal!'
            })
        }
    } else {
        return res.status(404).json({
            message: 'Login Gagal!'
        })
    }
}

exports.getUser = async (req, res) => {
    const user = await User.findOne({ _id: req.id })

    return res.status(200).json({
        message: "berhasil",
        data: user
    })
}