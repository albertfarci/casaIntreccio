export interface CasaTypeModel {
    title: boolean;
    description: boolean;
    photos: boolean;
    photos_evidenza: boolean;
    nome_scientifico: boolean;
    nome_in_sardo: boolean;
    ecologia_e_comportamento: boolean;
    conservazione: boolean;
    audio: boolean;
    buttonBeacon: boolean;
}

export enum CasaTypes {
    "florafauna" = "flora-fauna",
    "laguna" = "laguna",
    "audio" = "audio"
}

export const CASE_TYPE_ROUT = new Map<CasaTypes, string>(
    [
        [
            CasaTypes.florafauna, '/tablinks/flora-fauna-detail'
        ],
        [
            CasaTypes.laguna, '/tablinks/laguna-detail'
        ],
        [
            CasaTypes.audio, '/tablinks/audioguida-detail'
        ]
    ]
);

export const CASE_TYPE_CONFIGURATION = new Map<CasaTypes, CasaTypeModel>(
    [
        [
            CasaTypes.laguna, {
                title: true,
                description: true,
                photos: true,
                photos_evidenza: true,
                nome_scientifico: false,
                nome_in_sardo: false,
                ecologia_e_comportamento: false,
                conservazione: false,
                audio: false,
                buttonBeacon: false
            }
        ],
        [
            CasaTypes.florafauna, {
                title: true,
                description: true,
                photos: true,
                photos_evidenza: true,
                nome_scientifico: true,
                nome_in_sardo: true,
                ecologia_e_comportamento: true,
                conservazione: true,
                audio: false,
                buttonBeacon: false
            }
        ],
        [
            CasaTypes.audio, {
                title: true,
                description: true,
                photos: true,
                photos_evidenza: true,
                nome_scientifico: false,
                nome_in_sardo: false,
                ecologia_e_comportamento: false,
                conservazione: false,
                audio: true,
                buttonBeacon: true
            }
        ]
    ]
);