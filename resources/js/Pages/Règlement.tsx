import React from 'react';
import PageComponents from "@/Components/PageComponents";
import {Head} from "@inertiajs/react";

const Reglement = () => {
    return (
        <PageComponents>
            <Head title={"Règlement intérieur"}/>
            <h1><u>Règlement intérieur</u></h1>
            <p>Le règlement intérieur est considéré comme lu et approuvé dès votre 1ère connections sur les serveurs de
                l'infrastructure, que ce soit sur le serveur de jeu ou sur le discord</p>

            <ol className={"list-decimal list-inside"}>
                <li>
                    <h2 className={"inline-block"}><u>Règlement Discord</u></h2>
                    <ol className={"list-decimal list-inside px-5"}>
                        <li>
                            <h3 className={"inline-block"}>Pseudo et photo de profil</h3>
                            <p>
                                Tout pseudo et/ou photo de profil à caractère discriminant, pornographique, terroriste
                                ou encore politique sont strictement interdits
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Discrimination</h3>
                            <p>
                                La discrimination est strictement interdite, un bannissement définitif sera prononcé, de
                                façon non négociable. Un dépot de plainte pourra même être envisagé par le staff de
                                l'infrastructure à la victime envers la personne concernée
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Langage</h3>
                            <p>
                                Que ce soit dans un salon textuel ou vocal, merci de tenir un language correct. Les
                                sanctions pourront aller d'un simple warn jusqu'à un ban temporaire.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Humour</h3>
                            <p>
                                L'humour de ce serveur est à utiliser avec modération. N'oubliez pas que nous sommes sur
                                un serveur communaitaire, vous ne connaissez donc pas forcément ceux qui se trouvent en
                                face de vous. Par conséquent, toute forme d'humour noire est à proscrire.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Conflits</h3>
                            <p>
                                En cas de mésentente avec d'autres joueurs, merci de ne pas régler vos différents en
                                public. Vos histoires ne concernent pas les autres, cela peut même déranger et polluer
                                le tchat.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Flood</h3>
                            <p>
                                Le flood est la répétition successive d'un seul et même caractère. Cela est également
                                interdit sur le serveur et c'est considéré comme de la pollution du tchat.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Spam</h3>
                            <p>
                                Tout comme le flood, le spam est considéré comme de la pollution du tchat donc c'est
                                aussi interdit.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Mentions</h3>
                            <p>
                                Sauf en cas de mention contraire, merci de ne pas mentionner le staff. Néanmoins vous
                                pouvez toujours contacter le staff par message privé.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Pub</h3>
                            <p>
                                Que ce soit par message privé ou publiquement sur le serveur, il est interdit de faire
                                de la pub sur le serveur. Nous tolérerons malgré tout les pubs dans vos pseudos, vos
                                descriptions ou biographies.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>RolePlay</h3>
                            <p>
                                Bien que Harry PoCraft soit un serveur RP, il est interdit de parler RP sur le serveur
                                discord.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <h2 className={"inline-block"}><u>Règlement en jeu</u></h2>
                    <ol className={"list-decimal list-inside px-5"}>
                        <li>
                            <h3 className={"inline-block"}>NoFearRP</h3>
                            <p>
                                Cette règle concerne la notion de la peur. Si un moldu est braqué par un mage noir,
                                il devra faire tout ce qu'il lui est demandé.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>PowerGaming / NoPainRP</h3>
                            <p>
                                Durant votre aventure, vous serez amenés à recevoir des sortilèges consistant à vous
                                attaquer, que ce soit un simple sortilège de combat (Stupéfix), ou d'autres sortilèges
                                consistant à vous faire plus de mal (endoloris). Dans ce cas, vous devrez avoir mal et
                                ne pas pouvoir faire tout et n'importe quoi, dans un laps de temps plus ou moins long.
                                Cette règle est aussi valable lorsque vous êtes blessé, vous n'aurez pas le droit de
                                sauter ou courir.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>NLR</h3>
                            <p>
                                Le New Life Rules (NLR) est la règle de la nouvelle vie. Dès lors que vous mourrez, vous
                                devrez incarner un nouveau personnage et avoir tout oublié de votre vie précédente.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>RTZ</h3>
                            <p>
                                Le Return To Zone (RTZ) est une règle consistant à ne pas retourner sur son lieu de mort
                                pendant un certain temps. Ici, il faut attendre 10 minutes avant de retourner sur son
                                lieu de mort.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>MétaGaming</h3>
                            <p>Il est interdit d'utiliser dans un contexte RP des éléments obtenus dans un contexte
                                HRP.</p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Les tchats</h3>
                            <p>
                                Comme sur la plupart des serveurs RôlePlay, plusieurs tchat sont mis à disposition. Le
                                tchat HRP (avec la commande /hrp) pour parler HRP, le tchat RP vocal (avec la commande
                                /audio), enfin le tchat RP écrit, surtout présents pour les sourds et muets ou ceux qui
                                n'ont pas de micro. Merci de les utiliser à bon escient. <br/>
                                Nous précisons que, comme sur le serveur discord, le spam et le flood sont interdits.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Les sortilèges impardonnables</h3>
                            <p>
                                Les 3 sortilèges impardonnables vous seront accessibles. Néanmoins, leurs utilisations
                                est très règlementée. <br/><br/>
                                <ul className={"list-disc list-inside"}>
                                    <li>
                                        Les sorciers de 1er cycle (de 1ère à 6ème année) ne devront les utiliser sous
                                        aucun prétexte
                                    </li>
                                    <li>
                                        Leur utilisation doit être justifiée
                                    </li>
                                    <li>

                                        Les "bons" sorciers n'auront le droit de les utiliser qu'en cas d'extrême
                                        nécessité, ou durant un combat contre des mages noirs.
                                    </li>
                                </ul><br/>
                                Le non-respect d'une de ces 3 règles entraînera de lourdes sanctions. La mauvaise
                                utilisation du sort "Avada Kedavra" pourra même être considérée comme du FreeKill, ce
                                qui est bannissable pendant une longue durée.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Le cheat</h3>
                            <p>
                                Toutes formes de tcheat est formellement interdite, et entrainera des sanctions pouvant
                                aller d'un bannissement d'un mois jusqu'à un bannissement définitif.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>La magie devant les moldus</h3>
                            <p>
                                L'usage de la magie devant les moldus est toléré mais le ministère se réserve le droit
                                de vous condamner. Néanmoins, que vous soyez sorcier de 1er cycle ou non, il est
                                autorisé de faire usage de la magie devant un moldu si sa vie est menacée. Néanmoins, un
                                sortilège d'amnésie devralui être pratiqué juste après afin d'avoir aucun souvenirs sur
                                l'incident. L'oubli de ce dernier sera sanctionné pour NoRP.
                            </p>
                        </li>
                        <li>
                            <h3 className={"inline-block"}>Les déconnections</h3>
                            <p>
                                En cas de déconnection lors d'une scène RP ou d'un entretien avec le staff, merci de le
                                justifier au quel cas des sanctions pouvant aller d'un simple ban jusqu'à un bannissement
                                de 5 jours.
                            </p>
                        </li>
                    </ol>
                </li>
            </ol>
        </PageComponents>
    );
};

export default Reglement;
