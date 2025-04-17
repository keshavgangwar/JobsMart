import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const UpdateProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.Profile?.bio || "",
    skills: user?.Profile?.skills?.join(",") || "",
    Resume: user?.Profile?.Resume || "",
    profilePicture: user?.Profile?.profilePicture || "",
  });

  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    setOpen(false);
    console.log(input);
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle className={"text-center font-bold italic"}>
            Update Profile
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler}>
          <div className="grid mt-4">
            <div>
              <Label>Full Name</Label>
              <Input
                className={"my-2"}
                value={input.fullname}
                onChange={changeEventHandler}
                type="text"
                name="fullname"
                placeholder="Full Name"
              />
            </div>
            <div>
              <Label>Bio</Label>
              <Input
                className={"my-2"}
                value={input.bio}
                onChange={changeEventHandler}
                type="text"
                name="bio"
                placeholder="Bio"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                className={"my-2"}
                value={input.email}
                onChange={changeEventHandler}
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div>
              <Label>Contact</Label>
              <Input
                className={"my-2"}
                value={input.phoneNumber}
                onChange={changeEventHandler}
                type="text"
                name="contact"
                placeholder="Contact"
              />
            </div>
            <div>
              <Label>Skills (comma-separated)</Label>
              <Input
                className={"my-2"}
                value={input.skills}
                onChange={changeEventHandler}
                type="text"
                name="skills"
                placeholder="Skills"
              />
            </div>
            <div>
              <Label>Photo</Label>
              <Input
                accept="image/*"
                onChange={fileChangeHandler}
                type="file"
                name="Photo"
                id="Photo"
                className="w-full my-2 cursor-pointer italic hover:bg-[#fbbf24] hover:text-grey-900 bg-gradient-to-r from-[#fbbf24] to-transparent"
              />
            </div>
            <div>
              <Label>Resume</Label>
              <Input
                accept="application/pdf"
                onChange={fileChangeHandler}
                type="file"
                name="file"
                id="file"
                className="w-full my-2 cursor-pointer italic hover:bg-[#fbbf24] hover:text-grey-900 bg-gradient-to-r from-[#fbbf24] to-transparent"
              />
            </div>
          </div>
          <DialogFooter>
            {loading ? (
              <Button className={"w-full my-2"}>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait..
              </Button>
            ) : (
              <Button className="w-full my-2 cursor-pointer" type="submit">
                Update
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfile;
