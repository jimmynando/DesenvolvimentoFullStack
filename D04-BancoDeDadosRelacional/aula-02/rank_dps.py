import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

engine = sa.create_engine("sqlite:///aula-02/db/ocorrencias.db")
Sessao = orm.sessionmaker(bind=engine)
sessao = Sessao()

rank_dp = pd.DataFrame(
  sessao.query(
    oc.DP.nome.label("DP"), sa.func.sum(oc.Ocorrencias.qtde).label()
  ).join(
    oc.Ocorrencias, 
    oc.Ocorrencias.cod_dp == oc.DP.cod_dp
  ).join(
    oc.Municipio, 
    oc.Ocorrencias.cod_ibge == oc.Municipio.cod_ibge
  ).where(
    oc.Municipio.regiao == "Capital"
  ).group_by(
    oc.DP.nome
  ).order_by(
    sa.func.sum(oc.Ocorrencias.qtde).label("Total").desc()
  ).all()
)

print(rank_dp)