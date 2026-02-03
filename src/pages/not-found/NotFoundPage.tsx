import cls from "./NotFoundPage.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={cls.wrapper}>
      <div className={cls.card}>
        <h1>404</h1>
        <p>Page not found</p>

        <Button onClick={() => navigate("/login")}>"Go Home"</Button>
      </div>
    </div>
  );
};
