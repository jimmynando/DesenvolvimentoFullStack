import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

endereco = "aula-02/data/"

dp = pd.read_csv(endereco + "dp.csv", sep=";")
responsavel_dp = pd.read_excel(endereco + "responsavel_dp.xlsx")
municipio = pd.read_csv(endereco + "municipio.csv", sep=";")
ocorrencias = pd.read_xlsx(endereco + "ocorrencias.xlsx")

tb_dp = pd.DataFrame(dp)
tb_responsavel = pd.DataFrame(responsavel_dp)
tb_municipio = pd.DataFrame(municipio)
tb_ocorrencias = pd.DataFrame(ocorrencias)

engine = sa.create_engine("sqlite:///aula-02/db/ocorrencias.db")

conn = engine.connect()
metadata = sa.schema.MetaData(bind=engine)
Sessao = orm.sessionmaker(bind=engine)
sessao = Sessao()

dados_dp = tb_dp.to_dict(orient="records")
tabela_dp = sa.Table(oc.DP.__tablename__, metadata, autoload=True)

try:
  conn.execute(tabela_dp.insert(), dados_dp)
  sessao.commit()
except ValueError:
  ValueError()

dados_responsavel_dp = tb_responsavel.to_dict(orient="records")
tabela_responsavel_dp = sa.Table(oc.Responsavel.__tablename__, metadata, autoload=True)

try:
  conn.execute(tabela_responsavel_dp.insert(), dados_responsavel_dp)
  sessao.commit()
except ValueError:
  ValueError()

dados_municipio = tb_municipio.to_dict(orient="records")
tabela_municipio = sa.Table(oc.Municipio.__tablename__, metadata, autoload=True)

try:
  conn.execute(tabela_municipio.insert(), dados_municipio)
  sessao.commit()
except ValueError:
  ValueError()

dados_ocorrencias = tb_ocorrencias.to_dict(orient="records")
tabela_ocorrencias = sa.Table(oc.Ocorrencias.__tablename__, metadata, autoload=True)

try:
  conn.execute(tabela_ocorrencias.insert(), dados_ocorrencias)
  sessao.commit()
except ValueError:
  ValueError()

sessao.close_all()