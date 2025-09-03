"use client";

import { useState } from "react";
import { User, Settings, ShoppingBag, Heart, LogOut, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AccountEditForm } from "@/components/custom/AccountEditForm";
import { AccountDetailsFormData } from "@/lib/validations";

// Mock user data - replace with actual data fetching
const initialUser = {
  fullName: "Nguyễn Văn A",
  email: "nguyenvana@email.com",
  phoneNumber: "0987 654 321",
  address: "123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh",
};

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);

  const handleSave = (data: AccountDetailsFormData) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Tài khoản của tôi</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:col-span-1">
          <nav className="flex flex-col space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-primary bg-primary/10 rounded-lg font-semibold"
            >
              <User className="h-5 w-5" />
              <span>Thông tin cá nhân</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:bg-muted/50 rounded-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Đơn hàng của tôi</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:bg-muted/50 rounded-lg"
            >
              <Heart className="h-5 w-5" />
              <span>Sản phẩm yêu thích</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:bg-muted/50 rounded-lg"
            >
              <Settings className="h-5 w-5" />
              <span>Cài đặt</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:bg-muted/50 rounded-lg"
            >
              <LogOut className="h-5 w-5" />
              <span>Đăng xuất</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3">
          <div className="bg-background border rounded-lg p-6">
            {isEditing ? (
              <AccountEditForm
                user={user}
                onSave={handleSave}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Thông tin cá nhân</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Chỉnh sửa
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Họ và tên
                    </label>
                    <p className="font-semibold">{user.fullName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Email
                    </label>
                    <p className="font-semibold">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Số điện thoại
                    </label>
                    <p className="font-semibold">{user.phoneNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Địa chỉ
                    </label>
                    <p className="font-semibold">{user.address}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
