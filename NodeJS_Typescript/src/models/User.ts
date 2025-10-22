import mongoose from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    age: number;
    createdAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
    name: String,
    email: String,
    age: Number,
    createdAt: { type: Date, default: Date.now },
})

const User = mongoose.model<IUser>("User", UserSchema);

export default User;