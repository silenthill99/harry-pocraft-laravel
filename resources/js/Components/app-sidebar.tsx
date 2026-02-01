import React from 'react';
import {
    Sidebar,
    SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/Components/ui/sidebar";
import {Link, usePage} from "@inertiajs/react";
import {accueil, dashboard, logout} from "@/routes";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu";
import {SharedData} from "@/types";
import profile from "@/routes/profile";
import {ChevronsUpDownIcon} from "lucide-react";

const AppSidebar = () => {

    const navItems = [
        {
            label: "Dashboard",
            href: dashboard()
        }
    ]

    const {auth} = usePage<SharedData>().props

    return (
        <Sidebar variant={"floating"}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={accueil()}>
                                <ApplicationLogo/>
                                <span>Retour à l'accueil</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item, i) => (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.href}>{item.label}</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    {auth.user.name}
                                    <ChevronsUpDownIcon className={"ml-auto"}/>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem><Link href={profile.update()}>Profil</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link href={logout()}>Se déconnecter</Link></DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
