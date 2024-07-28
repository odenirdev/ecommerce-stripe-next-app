import { CheckoutDTO } from "@/pages/api/checkout";
import axios from "axios";

type CheckoutResponse = {
	url: string;
};

export default function useApi() {
  const checkout = async (dto: CheckoutDTO): Promise<CheckoutResponse> => {
    const response = await axios.post("/api/checkout", dto);

    return response.data;
  };

  return { checkout };
}
