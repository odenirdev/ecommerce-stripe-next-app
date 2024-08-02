import Image from "next/image";
import Typography from "../atoms/Typography";

export default function Footer() {
  return (
    <footer className="bg-muted p-4 md:py-6 w-full">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between">
        <Typography className="text-xs text-muted-foreground">
          &copy; 2024 Cosméticos&Co. Todos os direitos reservados.
        </Typography>

        <Image
          width={200}
          height={200}
          src="/powered-stripe.png"
          alt=""
          className="w-96"
        />
      </div>
    </footer>
  );
}
