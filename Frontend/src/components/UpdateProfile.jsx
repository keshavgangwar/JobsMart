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
import { useSelector } from "react-redux";

const UpdateProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.Profile?.bio,
    skills: user?.Profile?.skills?.map((skill) => skill),
    Resume: user?.Profile?.resume,
    profilePicture: user?.Profile?.file,
  });

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
        <form>
          <div className="grid mt-4">
            <div>
              <Label>Full Name</Label>
              <Input
                className={"my-2"}
                value={input.fullname}
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
                type="text"
                name="skills"
                placeholder="Skills"
              />
            </div>
            <div>
              <Label>Photo</Label>
              <Input
                accept="image/*"
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
