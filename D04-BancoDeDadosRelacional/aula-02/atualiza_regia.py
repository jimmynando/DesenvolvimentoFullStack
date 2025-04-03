import sqlalchemy as sa
import ocorrencias as oc

engine = sa.create_engine("sqlite:///aula-02/db/ocorrencias.db")

metadados = sa.MetaData(bind=engine)
sa.MetaData.reflect(metadados)

tb_municipio = metadados.tables[oc.Municipio.__tablename__]

atualiza_regiao = sa.update(
  tb_municipio
).values(
  {"regiao": "Capital"}
).where(
  tb_municipio.c.municipio == "Rio de Janeiro"
)

try:
  engine.execute(atualiza_regiao)
  print("Dados atualizados")
except ValueError:
  ValueError()