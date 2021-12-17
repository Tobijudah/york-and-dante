export type PageProps = {
	appLoaded: boolean;
	preloaded: boolean;
	navOnClick: () => void;
	setAppLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};
