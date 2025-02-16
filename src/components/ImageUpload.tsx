import { FileUpload } from "./FileUpload";

interface ImageUploadProps {
  onImageUpload: (imageDataUrl: string | null) => void;
  selectedImage: string | null;
}

export function ImageUpload({
  onImageUpload,
  selectedImage,
}: ImageUploadProps) {
  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onImageUpload(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleTrySampleImage = () => {
    const img = new Image();
    img.src = "/src/assets/default-image.png";
    img.onload = () => {
      onImageUpload(img.src);
    };
  };

  const handleRemoveImage = () => {
    onImageUpload(null);
  };

  return (
    <FileUpload
      onFileUpload={handleImageUpload}
      hasFile={!!selectedImage}
      onRemove={handleRemoveImage}
      accept="image/*"
      label="Upload Image"
      uploadedMessage="Image uploaded!"
    >
      <div className="mt-4 text-center">
        <button
          onClick={handleTrySampleImage}
          className="p-2 rounded-lg inline-flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 border-1 border-blue-600 hover:border-blue-700 font-medium w-full"
        >
          <span role="img" aria-label="sparkles">
            ✨
          </span>
          Try with sample image
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </button>
      </div>
    </FileUpload>
  );
}
