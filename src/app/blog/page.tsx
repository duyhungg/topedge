import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Mẹo Mua Sắm Online Thông Minh Giúp Bạn Tiết Kiệm Tối Đa",
    excerpt: "Khám phá những bí quyết giúp bạn trở thành người tiêu dùng thông thái, từ việc săn mã giảm giá đến việc chọn thời điểm mua sắm lý tưởng...",
    author: "Nguyễn Văn An",
    date: "Tháng 9, 2024",
    category: "Mẹo vặt",
    imageUrl: "/placeholder.svg", // Replace with actual image paths
    href: "/blog/post-1",
  },
  {
    id: 2,
    title: "Xu Hướng Thời Trang Thu Đông 2024: Những Gì Bạn Cần Có",
    excerpt: "Cập nhật ngay những xu hướng thời trang hot nhất mùa thu đông năm nay. Từ màu sắc chủ đạo đến những item không thể thiếu trong tủ đồ của bạn...",
    author: "Trần Thị Bích",
    date: "Tháng 9, 2024",
    category: "Thời trang",
    imageUrl: "/placeholder.svg",
    href: "/blog/post-2",
  },
  {
    id: 3,
    title: "Đánh Giá Top 5 Điện Thoại Thông Minh Đáng Mua Nhất Nửa Cuối Năm",
    excerpt: "Chúng tôi đã trải nghiệm và đánh giá chi tiết top 5 smartphone hàng đầu hiện nay để giúp bạn đưa ra lựa chọn tốt nhất cho nhu cầu của mình...",
    author: "Lê Minh Cường",
    date: "Tháng 8, 2024",
    category: "Công nghệ",
    imageUrl: "/placeholder.svg",
    href: "/blog/post-3",
  },
  {
    id: 4,
    title: "Bí Quyết Trang Trí Nhà Cửa Tối Giản Mà Vẫn Tinh Tế",
    excerpt: "Học cách biến không gian sống của bạn trở nên gọn gàng, thoáng đãng và đầy phong cách với những mẹo trang trí nhà cửa theo xu hướng tối giản...",
    author: "Phạm Thị Dung",
    date: "Tháng 8, 2024",
    category: "Nhà cửa",
    imageUrl: "/placeholder.svg",
    href: "/blog/post-4",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog & Tin tức</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Khám phá các bài viết mới nhất của chúng tôi về xu hướng, mẹo mua sắm và các câu chuyện thú vị khác.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={post.href}>
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-muted flex items-center justify-center">
                {/* Placeholder for image */}
                <span className="text-muted-foreground">Image</span>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-xl leading-snug">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground">
                  <span>By {post.author}</span> ・ <span>{post.date}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </main>
    </div>
  );
}

