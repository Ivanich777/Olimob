import { Button } from "@/shared/ui/Button";
import cls from "./ProfilePage.module.scss";

export const ProfilePage = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.card}>
        <h1 className={cls.title}>Your Profile</h1>

        <div className={cls.info}>
          <div className={cls.row}>
            <span className={cls.label}>Name</span>
            <span className={cls.value}>John Doe</span>
          </div>

          <div className={cls.row}>
            <span className={cls.label}>Email</span>
            <span className={cls.value}>john.doe@gmail.com</span>
          </div>
        </div>

        <Button>Logout</Button>
      </div>
    </div>
  );
};
