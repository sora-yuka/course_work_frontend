import api from './client'


export const getStatsRequest = async () => {
    const response = await api.get('api/v1/inventory/stats/')
    return response
}

export const getInventoryQuery = async (qParams) => {
    const response = await api.get(`api/v1/inventory/read/?${qParams.toString()}`)
    return response
}

export const getInventory = async () => {
    const response = await api.get('api/v1/inventory/read/')
    return response
}