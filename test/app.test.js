const { agregarHerramienta, listarHerramientas } = require('../app.js');

describe('Registro de Herramientas', () => {
  beforeEach(() => {
    herramientas.length = 0;  // Limpiar el array antes de cada prueba
  });

  test('Agregar una herramienta', () => {
    const herramienta = agregarHerramienta('Kubernetes', 'Orquestación');
    expect(herramienta).toEqual({ nombre: 'Kubernetes', categoria: 'Orquestación' });
    expect(listarHerramientas().length).toBe(1);
  });

  test('Listar herramientas vacías', () => {
    expect(listarHerramientas()).toEqual([]);
  });
});