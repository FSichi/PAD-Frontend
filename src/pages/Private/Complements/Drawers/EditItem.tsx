import { Button } from 'components/Button';
import { TextInput } from 'components/Inputs/TextInput';
import { DrawerHeader } from 'components/Shared/DrawerHeader';
import {
    CategoriaRequest,
    ColorRequest,
    MarcaRequest,
    TalleRequest,
    TipoTalleRequest,
} from 'db/interfaces/Complements';
import { ComplementService } from 'db/services/app';
import { useAction } from 'hooks/db/useAction';
import { useDrawer } from 'hooks/useDrawer';
import { useForm } from 'hooks/useForm';
import toast from 'react-hot-toast';
import { getUpdateComplementBody } from 'utils/helpers/complementsHelper';
import { ComplementType } from 'utils/interfaces/general.types';

interface Props {
    type: ComplementType;
    itemData: {
        id: number;
        description: string;
    };
}

interface IFormData {
    name: string;
}

const title = {
    color: 'Editar Color',
    categoria: 'Editar Categoria',
    marca: 'Editar Marca',
    talle: 'Editar Talle',
    tipoTalle: 'Editar Tipo de Talle',
};

const endpointsType = {
    color: (body: ColorRequest) => ComplementService.updateColor(body),
    categoria: (body: CategoriaRequest) => ComplementService.updateCategoria(body),
    marca: (body: MarcaRequest) => ComplementService.updateMarca(body),
    talle: (body: TalleRequest) => ComplementService.updateTalle(body),
    tipoTalle: (body: TipoTalleRequest) => ComplementService.updateTipoTalle(body),
};

export const EditItem = ({ itemData, type }: Props) => {
    const { CloseDrawer } = useDrawer();

    const { mutate } = useAction<any, any>({
        name: 'Complements - Update - ' + type,
        endpoint: endpointsType[type],
    });

    const handleUpdateComplement = (formData: IFormData) => {
        const body = getUpdateComplementBody(type, formData, itemData.id);
        mutate(body, {
            onSuccess: () => {
                toast.success('Complemento Creado con Exito');
                CloseDrawer();
            },
        });
    };

    const { formData, handleChange, handleSubmit, isEdited } = useForm<IFormData>({
        defaultValues: { name: itemData.description },
        submitAction: () => handleUpdateComplement(formData),
    });

    return (
        <div className="px-4">
            <DrawerHeader title={title[type]} />
            <form onSubmit={e => handleSubmit(e)} className="flex flex-col gap-6 mt-4">
                <TextInput
                    name="name"
                    inputType="text"
                    label={type === 'talle' ? 'Descripcion' : 'Nombre'}
                    containerStyles="w-full"
                    onChange={(value: string) => handleChange('name', value)}
                    value={formData.name}
                />

                <Button
                    customStyles="w-full"
                    type="submit"
                    size="large"
                    disabled={!isEdited}
                    text="Actualizar"
                />
            </form>
        </div>
    );
};
