import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainWrapper from "./components/wrappers/MainWrapper/MainWrapper";
import { TranslationWrapper } from "./components/wrappers/TranslationWrapper/TranslationWrapper";
import "./global/css/global.css";
import { globalTheme } from "./global/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<TranslationWrapper>
			<ThemeProvider theme={globalTheme}>
				<MainWrapper>
					<App />
				</MainWrapper>
			</ThemeProvider>
		</TranslationWrapper>
	</React.StrictMode>
);
