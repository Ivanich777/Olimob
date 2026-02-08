import { Button } from "@/shared/ui/Button";
import cls from "./ProfilePage.module.scss";
import { useAuthorization } from "@/features/auth/hooks/useAuthorization.ts";
import { useAuthStore } from "@/entities/user/model/authStore.ts";

export const ProfilePage = () => {
  const { handleLogout, isLoading } = useAuthorization();
  const { user } = useAuthStore();
  console.log(user);
  return (
    <div className={cls.wrapper}>
      <div className={cls.card}>
        <h1 className={cls.title}>Your Profile</h1>

        <div className={cls.info}>
          <div className={cls.content}>
            <span className={cls.label}>Name</span>
            <span className={cls.value}>{user?.name}</span>
          </div>

          <div className={cls.content}>
            <span className={cls.label}>Email</span>
            <span className={cls.value}>{user?.email}</span>
          </div>
        </div>

        <Button disabled={isLoading} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
