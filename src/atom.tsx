import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
	key: "todoLocal",
	storage: localStorage,
});
export const MenuToggle = atom({
	key: "MenuBtn",
	default: false,
});
export const VideoToggle = atom({
	key: "VideoBtn",
	default: false,
});

interface IForm {
	Id: string;
	Password: string;
}

interface MyList {
	[key: string]: string;
}

export const LoginId = atom({
	key: "login",
	default: "",
});

export const JoinFunAtom = atom<IForm[]>({
	key: "Join",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const MyList = atom<MyList[]>({
	key: "MyList",
	default: [],
	// effects_UNSTABLE: [persistAtom],
});

export const FilterIdList = selector({
	key: "IdList",
	get: ({ get }) => {
		const myList = get(MyList);
		const loginId = get(LoginId);
		return myList.filter((id) => id.id == loginId);
	},
});
