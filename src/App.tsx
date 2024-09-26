import { CodeAndPreview } from "@/components/CodeAndPreview"
import Header from "@/components/Header"
import { useEffect } from "react"
import { useCurrentSnippetId } from "@/hooks/use-current-snippet-id"
import { useSnippet } from "./hooks/use-snippet"
import { ContextProviders } from "./ContextProviders"
import { EditorPage } from "./pages/editor"
import { DashboardPage } from "./pages/dashboard"
import { ViewSnippetPage } from "./pages/view-snippet"
import { LandingPage } from "./pages/landing"
import { Route, Switch } from "wouter"
import { AiPage } from "./pages/ai"
import { ProfilePage } from "./pages/profile"
import { NewestPage } from "./pages/newest"
import { SettingsPage } from "./pages/settings"
import { SearchPage } from "./pages/search"

function App() {
  return (
    <ContextProviders>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/editor" component={EditorPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/ai" component={AiPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/newest" component={NewestPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/:snippetName*" component={ViewSnippetPage} />
      </Switch>
    </ContextProviders>
  )
}

export default App
