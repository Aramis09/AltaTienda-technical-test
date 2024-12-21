import queryClient from "@/services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

//*AQUI PONEMOS TODOS LOS PROVIDERS QUE SON ASIGNADOS GLOBALMENTE EN EL LAYOUT RAIZ */

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
