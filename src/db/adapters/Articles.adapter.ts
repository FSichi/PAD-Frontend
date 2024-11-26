import { NewStock, StockResponseFormatted } from 'db/interfaces/Articles';
import { GetResponse } from 'db/interfaces/Main';

export const StockArticlesAdapter = (data: GetResponse<NewStock[]>) => {
    console.log(data.data);
    return {
        ...data,
        total: 999,
        data: data.data.map((item: NewStock) => ({
            id: item.idArticulo,
            codigoBarras: item?.codigoBarra || '',
            descripcion: item?.articuloDescripcion || '',
            marca: item?.articuloMarca || '',
            categoria: item?.articuloCategoria || '',
            tipoTalle: item?.stockTalleTipoTalle || '',
            talle: item?.stockTalle || '',
            color: item?.stockColor || '',
        })) as StockResponseFormatted[],
    };
};
