import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={
            '${size == "small" ? "text-muted-foreground" : "text-white opacity-70"}'
          }
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={'${size == "small" ? "text-2xl" : "text-4xl"} font-bold'}>
          {Intl.NumberFormat("pt-pt", {
            style: "currency",
            currency: "EUR",
          }).format(amount)}{" "}
        </p>

        {size == "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;