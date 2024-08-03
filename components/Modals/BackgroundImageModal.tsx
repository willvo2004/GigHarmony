import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EditBackground({
  updateUrl,
  updateFile,
}: {
  updateUrl: (formData: FormData) => void;
  updateFile: (formData: FormData) => void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Edit background</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form action={updateFile} encType="multipart/form-data">
          <AlertDialogHeader>
            <AlertDialogTitle>Change your background</AlertDialogTitle>
            <AlertDialogDescription>
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" name="file" />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
