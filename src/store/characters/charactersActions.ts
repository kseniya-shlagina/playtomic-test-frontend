export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
}

export const getCharactersSuccess = (charactersData: ICharacter[]) => ({
  type: "GET_CHARACTERS_SUCCESS" as const,
  payload: {
    charactersData,
  },
});

export const getCharactersLoading = () => ({
  type: "GET_CHARACTERS_LOADING" as const,
});

export const getCharactersError = (err: string) => ({
  type: "GET_CHARACTERS_ERROR" as const,
  payload: {
    err,
  },
});

export type ICharactersAction =
  | ReturnType<typeof getCharactersSuccess>
  | ReturnType<typeof getCharactersLoading>
  | ReturnType<typeof getCharactersError>;
