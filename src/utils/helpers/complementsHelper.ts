import { ComplementType, SelectOption } from 'utils/interfaces/general.types';

interface IFormData {
    name: string;
    tipoTalle?: SelectOption;
}

export const getCreateComplementBody = (
    type: ComplementType,
    itemId: number,
    formData: IFormData,
) => {
    const body = {
        color: {
            idColor: itemId,
            nombre: formData.name,
        },
        categoria: {
            idCategoria: itemId,
            descripcion: formData.name,
        },
        marca: {
            idMarca: itemId,
            nombre: formData.name,
        },
        talle: {
            idTalle: itemId,
            talleArticulo: formData.name,
            idTipoTalle: formData.tipoTalle?.value,
            descripcion: formData.tipoTalle?.label,
        },
        tipoTalle: {
            idTipoTalle: itemId,
            descripcion: formData.name,
        },
    };

    return body[type];
};

export const getUpdateComplementBody = (
    type: ComplementType,
    formData: IFormData,
    itemId: number,
) => {
    const body = {
        color: {
            idColor: itemId,
            nombre: formData.name,
        },
        categoria: {
            idCategoria: itemId,
            descripcion: formData.name,
        },
        marca: {
            idMarca: itemId,
            nombre: formData.name,
        },
        talle: {
            idTalle: itemId,
            talleArticulo: formData.name,
            idTipoTalle: formData.tipoTalle?.value,
            descripcion: formData.tipoTalle?.label,
        },
        tipoTalle: {
            idTipoTalle: itemId,
            descripcion: formData.name,
        },
    };

    return body[type];
};
