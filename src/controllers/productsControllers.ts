import { Request, Response } from "express";
import { productDao } from '../models/dao/index'


export const getAll = async(req: Request, res: Response) => {
    const products = await productDao.getAll()
  
    res.json(products)
}

export const getById = async(req: Request, res: Response) => {
    const { id } = req.params
    const body = await productDao.getById(Number(id))
  
    res.json(body)
}
   
export const addProduct = async(req: Request, res: Response) => {
    const product = req.body

    const storedProduct =  await productDao.addProduct(product)
    res.json(storedProduct)
}

export const updateProductById = async(req: Request, res: Response) => {
    const { id } = req.params
    const product = req.body
  
    await productDao.updateProductById(Number(id), product)
  
    res.json({msg: `Product ${id} updated.`})
  }

export const deleteProductById = async (req: Request, res: Response) => {
    const { id } = req.params
    const deletedProduct = await productDao.deleteProductById(Number(id))

    res.json({
        deletedProduct
    })
}