import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Demo Layout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Card 1</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Đây là nội dung của card đầu tiên để test layout.
            </p>
            <Button>Xem thêm</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Card 2</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Đây là nội dung của card thứ hai để test layout.
            </p>
            <Button variant="outline">Xem thêm</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Card 3</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Đây là nội dung của card thứ ba để test layout.
            </p>
            <Button variant="secondary">Xem thêm</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Layout Test</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trang này được tạo để test layout của hệ thống thương mại điện tử. 
          Header, navigation, content và footer đều được hiển thị đầy đủ.
        </p>
      </div>
    </div>
  )
}
