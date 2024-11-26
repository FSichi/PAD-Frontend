import { StockResponse, StockResponseFormatted } from 'db/interfaces/Articles';
import { GetResponse } from 'db/interfaces/Main';

export const StockArticlesAdapter = (data: GetResponse<StockResponse[]>) => {
    return {
        ...data,
        total: 999,
        data: data.data.map((item: StockResponse) => ({
            id: item.id,
            codigoBarras: item.articulo.codigoBarras,
            descripcion: item.articulo.descripcion,
            marca: item.articulo.marca.nombre,
            categoria: item.articulo.categoria.descripcion,
            tipoTalle: item.talle.tipoTalle.descripcion,
            talle: item.talle.talleArticulo,
            color: item.color.nombre,
        })) as StockResponseFormatted[],
    };
};
