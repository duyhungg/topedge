import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/custom/ButtonLoading";
import { CardDemo } from "@/components/custom/CardDemo";
export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <div className="bg-red-600 flex items-center justify-center h-screen gap-4">
        {/* Button với các props khác nhau */}
        <Button>Default Button</Button>

        <Button variant="destructive" size="lg">
          Large Destructive
        </Button>

        <Button variant="outline" size="sm">
          Small Outline
        </Button>

        <Button variant="ghost" disabled>
          Disabled Ghost
        </Button>
        <CardDemo></CardDemo>
        <ButtonLoading></ButtonLoading>
      </div>
    </div>
  );
}
