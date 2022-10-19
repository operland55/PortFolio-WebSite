import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import "./styles/main.scss";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<QueryClientProvider client={client}>
				<App />
			</QueryClientProvider>
		</RecoilRoot>
	</React.StrictMode>
);
