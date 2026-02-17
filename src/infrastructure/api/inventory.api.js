import api from './client'


export const getStatsRequest = async () => {
    const response = await api.get('api/v1/inventory/stats/')
    return response
}

export const getInventory = async (params) => {
    const response = await api.get('api/v1/inventory/read/', { params })
}