export interface IPlanet {
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
}

export const getPlanetsSuccess = (planetsData: IPlanet[]) => ({
  type: "GET_PLANETS_SUCCESS" as const,
  payload: {
    planetsData,
  },
});

export const getPlanetsLoading = () => ({
  type: "GET_PLANETS_LOADING" as const,
});

export const getPlanetsError = (err: string) => ({
  type: "GET_PLANETS_ERROR" as const,
  payload: {
    err,
  },
});

export type IPlanetsAction =
  | ReturnType<typeof getPlanetsSuccess>
  | ReturnType<typeof getPlanetsLoading>
  | ReturnType<typeof getPlanetsError>;
