import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import FileUpload from "./fileUpload"

export default function Upload() {
  return (
    <Card className="bg-white">
      <CardContent className="p-6 space-y-4">
        <div className="container mx-auto p-4">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            T prompt
            <span className="text-red-500">*</span>
          </label>
          <FileUpload />
        </div>
      </CardContent>
      <CardFooter>
        <Button size="lg">Upload</Button>
      </CardFooter>
    </Card>
  )
}