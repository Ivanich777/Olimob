import { Button } from "@/shared/ui/Button";
import cls from "./ProfilePage.module.scss";
import { useAuthorization } from "@/features/auth/hooks/useAuthorization.ts";

export const ProfilePage = () => {
  const { handleLogout, isLoading } = useAuthorization();

  return (
    <div className={cls.wrapper}>
      <div className={cls.card}>
        <h1 className={cls.title}>Your Profile</h1>

        <div className={cls.info}>
          <div className={cls.content}>
            <span className={cls.label}>Name</span>
            <span className={cls.value}>John Doe</span>
          </div>

          <div className={cls.content}>
            <span className={cls.label}>Email</span>
            <span className={cls.value}>john.doe@gmail.com</span>
          </div>
        </div>

        <Button disabled={isLoading} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
