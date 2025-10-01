import mongoose from "mongoose"

const ProfileSchema = new mongoose.Schema(
    {
        DisplayName : {
            type : String,
            required : [true, "Silakan isi nama anda"],
            unique : true,
            trim : true
        },
        profile : {
            type : String,
            required : [true, "Silakan masukkan foto anda"],
            unique : true,
            trim : true
        },
        bio : {
            type : String,
            required : [true, "Silakan masukkan bio anda "],
            unique : true,
            trim : true
        },
        user : {
            type : user,
            required : [true, ""]
        }
    },
    {
        timestamps : true 
    }
)

const ProfileModel = new mongoose.Model("user", ProfileSchema)

export default ProfileModel