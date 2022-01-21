export type PageProps = {
	appLoaded: boolean;
	preloaded: boolean;
	windowWidth: number;
	navOnClick: () => void;
	setAppLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};
