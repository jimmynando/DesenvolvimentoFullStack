import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

engine = sa.create_engine("sqlite:///aula-02/db/ocorrencias.db")
Sessao = orm.sessionmaker(bind=engine)
sessao = Sessao()

rank_municipio = pd.DataFrame(
  sessao.query(
    oc.Municipio.municipio.label("Municipio"),
    sa.func.sum(oc.Ocorrencias.qtde).label("Total")
  ).join(
    oc.Ocorrencias,
    oc.Ocorrencias.cod_ibge == oc.Municipio.cod_ibge
  ).where(
    oc.Ocorrencias.ocorrencia == "roubo_veiculo"
  ).group_by(
    oc.Municipio.municipio
  ).order_by(
    sa.func.sum(oc.Ocorrencias.qtde).desc()
  ).all()
)

print(rank_municipio)