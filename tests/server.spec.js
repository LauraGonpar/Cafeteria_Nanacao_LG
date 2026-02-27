const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
it("Obtener un 200 y un arreglo con al menos un objeto", async () => {
        const response = await request(server).get("/cafes").send();
        const status = response.statusCode;
        const body = response.body;
        expect(status).toBe(200); 
        expect(body).toBeInstanceOf(Array); 
        expect(body.length).toBeGreaterThan(0);
});
it("Obteniendo un 404 si el id no existe", async () => {
        const jwt = "token_de_prueba"; 
        const idInexistente = 999;
        const response = await request(server)
            .delete(`/cafes/${idInexistente}`)
            .set("Authorization", jwt) 
            .send();
            
        expect(response.statusCode).toBe(404); 
    });
    it("Agregar un nuevo café y retornar 201", async () => {
        const nuevoCafe = { id: 5, nombre: "Espresso Doble" };
        const response = await request(server)
            .post("/cafes")
            .send(nuevoCafe);
            
        expect(response.statusCode).toBe(201); 
        expect(response.body).toContainEqual(nuevoCafe); 
    });
    it("Obteniendo un 400 si el id del parámetro es distinto al del payload", async () => {
        const idParametro = 1;
        const cafeActualizado = { id: 2, nombre: "Latte Especial" }; 
        
        const response = await request(server)
            .put(`/cafes/${idParametro}`)
            .send(cafeActualizado);
            
        expect(response.statusCode).toBe(400);  
    });
});
