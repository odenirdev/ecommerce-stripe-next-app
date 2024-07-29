import { Star } from "@phosphor-icons/react/dist/ssr";

export type RateProps = {
  value: number;
};

export default function Rate(props: RateProps) {
  const { value } = props;

  return (
    <div className="flex items-center gap-1">
      <Star
        weight="fill"
        className={`w-4 h-4 ${
          value >= 1 ? "fill-primary" : "fill-muted stroke-muted-foreground"
        }`}
      />
      <Star
        weight="fill"
        className={`w-4 h-4 ${
          value >= 2 ? "fill-primary" : "fill-muted stroke-muted-foreground"
        }`}
      />
      <Star
        weight="fill"
        className={`w-4 h-4 ${
          value >= 3 ? "fill-primary" : "fill-muted stroke-muted-foreground"
        }`}
      />
      <Star
        weight="fill"
        className={`w-4 h-4 ${
          value >= 4 ? "fill-primary" : "fill-muted stroke-muted-foreground"
        }`}
      />
      <Star
        weight="fill"
        className={`w-4 h-4 ${
          value >= 5 ? "fill-primary" : "fill-muted stroke-muted-foreground"
        }`}
      />
    </div>
  );
}
