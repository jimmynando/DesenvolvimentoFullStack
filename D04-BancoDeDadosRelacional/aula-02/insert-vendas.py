import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import vendas as vd

vendedor = pd.read_csv("aula-02/vendedor.csv", sep=";")
tb_vendedor = pd.DataFrame(vendedor)

engine = sa.create_engine("sqlite:///vendas.db")
sessao = orm.sessionmaker(bind = engine)
sessao = sessao()

for i in range(len(tb_vendedor)):
  dados_vendedor = vd.Vendedor(
    registro_vendedor = int(tb_vendedor['registro_vendedor'][i]),
    cpf = tb_vendedor['cpf'][i],
    nome = tb_vendedor['nome'][i],
    email = tb_vendedor['email'][i],
    genero = tb_vendedor['genero'][i]
  )

try:
  sessao.add(dados_vendedor)
  sessao.commit()
except ValueError:
  ValueError()