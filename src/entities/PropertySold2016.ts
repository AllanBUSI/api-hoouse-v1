import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code_postal", ["codePostal"], {})
@Index("valeur_fonciere", ["valeurFonciere"], {})
@Index("type_local", ["typeLocal"], {})
@Index("date_mutation", ["dateMutation"], {})
@Index("code_and_valeur", ["codePostal", "valeurFonciere"], {})
@Index("nom_and_valeur", ["codePostal", "nomCommune"], {})
@Index("nom_commune", ["nomCommune"], {})
@Index(
  "nom_and_valeur_and_date",
  ["nomCommune", "valeurFonciere", "dateMutation"],
  {}
)
@Index(
  "nom_and_date_and_valeur",
  ["nomCommune", "dateMutation", "nomCommune"],
  {}
)
@Index(
  "code_and_date_and_valeur",
  ["codePostal", "dateMutation", "nomCommune"],
  {}
)
@Index(
  "code_and_valeur_and_date",
  ["codePostal", "nomCommune", "dateMutation"],
  {}
)
@Index("nom_date_valeur", ["nomCommune", "valeurFonciere", "dateMutation"], {})
@Entity("property_sold_2016", { schema: "api_homeslash" })
export class PropertySold2016 {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "id_mutation", nullable: true, length: 255 })
  idMutation: string | null;

  @Column("varchar", { name: "date_mutation", nullable: true, length: 255 })
  dateMutation: string | null;

  @Column("varchar", { name: "nature_mutation", nullable: true, length: 255 })
  natureMutation: string | null;

  @Column("varchar", {
    name: "numero_disposition",
    nullable: true,
    length: 255,
  })
  numeroDisposition: string | null;

  @Column("varchar", { name: "valeur_fonciere", nullable: true, length: 255 })
  valeurFonciere: string | null;

  @Column("varchar", { name: "adresse_numero", nullable: true, length: 255 })
  adresseNumero: string | null;

  @Column("varchar", { name: "adresse_suffixe", nullable: true, length: 255 })
  adresseSuffixe: string | null;

  @Column("varchar", { name: "adresse_code_voie", nullable: true, length: 255 })
  adresseCodeVoie: string | null;

  @Column("varchar", { name: "adresse_nom_voie", nullable: true, length: 255 })
  adresseNomVoie: string | null;

  @Column("varchar", { name: "code_postal", nullable: true, length: 255 })
  codePostal: string | null;

  @Column("varchar", { name: "code_commune", nullable: true, length: 255 })
  codeCommune: string | null;

  @Column("varchar", { name: "nom_commune", nullable: true, length: 255 })
  nomCommune: string | null;

  @Column("varchar", {
    name: "ancien_code_commune",
    nullable: true,
    length: 255,
  })
  ancienCodeCommune: string | null;

  @Column("varchar", {
    name: "ancien_nom_commune",
    nullable: true,
    length: 255,
  })
  ancienNomCommune: string | null;

  @Column("varchar", { name: "code_departement", nullable: true, length: 255 })
  codeDepartement: string | null;

  @Column("varchar", { name: "id_parcelle", nullable: true, length: 255 })
  idParcelle: string | null;

  @Column("varchar", {
    name: "ancien_id_parcelle",
    nullable: true,
    length: 255,
  })
  ancienIdParcelle: string | null;

  @Column("varchar", { name: "numero_volume", nullable: true, length: 255 })
  numeroVolume: string | null;

  @Column("varchar", { name: "lot_1_numero", nullable: true, length: 255 })
  lot_1Numero: string | null;

  @Column("varchar", {
    name: "lot_1_surface_carrez",
    nullable: true,
    length: 255,
  })
  lot_1SurfaceCarrez: string | null;

  @Column("varchar", { name: "lot_2_numero", nullable: true, length: 255 })
  lot_2Numero: string | null;

  @Column("varchar", {
    name: "lot_2_surface_carrez",
    nullable: true,
    length: 255,
  })
  lot_2SurfaceCarrez: string | null;

  @Column("varchar", { name: "lot_3_numero", nullable: true, length: 255 })
  lot_3Numero: string | null;

  @Column("varchar", {
    name: "lot_3_surface_carrez",
    nullable: true,
    length: 255,
  })
  lot_3SurfaceCarrez: string | null;

  @Column("varchar", { name: "lot_4_numero", nullable: true, length: 255 })
  lot_4Numero: string | null;

  @Column("varchar", {
    name: "lot_4_surface_carrez",
    nullable: true,
    length: 255,
  })
  lot_4SurfaceCarrez: string | null;

  @Column("varchar", { name: "lot_5_numero", nullable: true, length: 255 })
  lot_5Numero: string | null;

  @Column("varchar", {
    name: "lot_5_surface_carrez",
    nullable: true,
    length: 255,
  })
  lot_5SurfaceCarrez: string | null;

  @Column("varchar", { name: "nombre_lots", nullable: true, length: 255 })
  nombreLots: string | null;

  @Column("varchar", { name: "code_type_local", nullable: true, length: 255 })
  codeTypeLocal: string | null;

  @Column("varchar", { name: "type_local", nullable: true, length: 255 })
  typeLocal: string | null;

  @Column("varchar", {
    name: "surface_reelle_bati",
    nullable: true,
    length: 255,
  })
  surfaceReelleBati: string | null;

  @Column("varchar", {
    name: "nombre_pieces_principales",
    nullable: true,
    length: 255,
  })
  nombrePiecesPrincipales: string | null;

  @Column("varchar", {
    name: "code_nature_culture",
    nullable: true,
    length: 255,
  })
  codeNatureCulture: string | null;

  @Column("varchar", { name: "nature_culture", nullable: true, length: 255 })
  natureCulture: string | null;

  @Column("varchar", {
    name: "code_nature_culture_speciale",
    nullable: true,
    length: 255,
  })
  codeNatureCultureSpeciale: string | null;

  @Column("varchar", {
    name: "nature_culture_speciale",
    nullable: true,
    length: 255,
  })
  natureCultureSpeciale: string | null;

  @Column("varchar", { name: "surface_terrain", nullable: true, length: 255 })
  surfaceTerrain: string | null;

  @Column("varchar", { name: "longitude", nullable: true, length: 255 })
  longitude: string | null;

  @Column("varchar", { name: "latitude", nullable: true, length: 255 })
  latitude: string | null;
}
