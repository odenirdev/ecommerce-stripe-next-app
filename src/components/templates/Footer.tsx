export default function Footer() {
  return (
    <footer className="bg-muted p-4 md:py-6 w-full">
      <div className="container max-w-7xl flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Cosméticos&Co. Todos os direitos reservados.
        </p>

        <img src="/powered-stripe.png" alt="" className="w-96" />
      </div>
    </footer>
  );
}
